import Nama from './Nama.jsx';
import Nim from './Nim.jsx';

function Mhs(){
    const mahasiswa = {
        nama: "Rohman Wingchun",
        nim: "A11.2012.06543"
    }

    return <div>
        <Nama nama={mahasiswa.nama} />
        <Nim nim={mahasiswa.nim}/>
    </div>
}

export default Mhs;