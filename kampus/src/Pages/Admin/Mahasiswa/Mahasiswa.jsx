import Card from "@/Pages/Admin/Components/Card";
import Heading from "@/Pages/Admin/Components/Heading";
import Button from "@/Pages/Admin/Components/Button";

import {
  confirmDelete,
  confirmUpdate,
} from "@/Utils/Helpers/SwalHelpers";

import { toastSuccess, toastError } from "@/Utils/Helpers/ToastHelpers";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MahasiswaTable from "./MahasiswaTable";
import MahasiswaModal from "./MahasiswaModal";

// import {
//   getAllMahasiswa,
//   storeMahasiswa,
//   updateMahasiswa,
//   deleteMahasiswa,
// } from "@/Utils/Apis/MahasiswaApi";

import {
  useMahasiswa,
  useStoreMahasiswa,
  useUpdateMahasiswa,
  useDeleteMahasiswa
} from "@/Utils/Hooks/useMahasiswa";

import { useAuthStateContext } from "@/Utils/Contexts/AuthContext";

const Mahasiswa = () => {
  const { user } = useAuthStateContext();
  const navigate = useNavigate();

  const { data: mahasiswa = [] } = useMahasiswa();
  const { mutate: store } = useStoreMahasiswa();
  const { mutate: update } = useUpdateMahasiswa();
  const { mutate: remove } = useDeleteMahasiswa();

  // const [mahasiswa, setMahasiswa] = useState([]);

  // const fetchMahasiswa = async () => {
  //   getAllMahasiswa().then((res) => setMahasiswa(res.data));
  // };
	
	// useEffect(() => {
	//   setTimeout(() => fetchMahasiswa(), 500);
	// }, []);

  const [form, setForm] = useState({ nim: "", nama: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const openAddModal = () => {
    setIsModalOpen(true);
    setForm({ nim: "", nama: "" });
    setIsEdit(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nim || !form.nama) {
      toastError("NIM dan Nama wajib diisi");
      return;
    }
  
    if (isEdit) {
      confirmUpdate(() => {
        update({ id: form.id, data: form });
        toastSuccess("Data berhasil diperbarui");
        setForm({ nim: "", nama: "" });
        setIsEdit(false);
        setIsModalOpen(false);
      });
    } else {
      const exists = mahasiswa.find((m) => m.nim === form.nim);
      if (exists) {
        toastError("NIM sudah terdaftar!");
        return;
      }
      store(form);
      toastSuccess("Data berhasil ditambahkan");
      setForm({ nim: "", nama: "" });
      setIsModalOpen(false);
    }
  };
  
  const handleEdit = (mhs) => {
    setForm({ id: mhs.id, nim: mhs.nim, nama: mhs.nama });
    setIsEdit(true);
    setIsModalOpen(true);
  };

  const handleDelete = (nim) => {
    confirmDelete(() => {
      remove(nim);
      toastSuccess("Data berhasil dihapus");
    });
  };

  return (
    <>
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Heading as="h2" className="mb-0 text-left">Daftar Mahasiswa</Heading>
          {user.permission.includes("mahasiswa.create") && (
            <Button onClick={() => openAddModal()}>+ Tambah Mahasiswa</Button>
          )}
        </div>

        {user.permission.includes("mahasiswa.read") && (
          <MahasiswaTable
            data={mahasiswa}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onDetail={(id) => navigate(`/admin/mahasiswa/${id}`)}
          />
        )}
      </Card>

      {isModalOpen && (
          <MahasiswaModal
            isOpen={isModalOpen}
            isEdit={isEdit}
            form={form}
            onChange={handleChange}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
          />
      )}
    </>
  );
};

export default Mahasiswa;