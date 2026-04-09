function Nama({ nama }){
    return <h3>Nama: {nama}</h3>
}

function Nim({ nim }){
    return <h3>NIM: {nim} </h3>
}

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

// function utama di file ini
function App(){
    return <div>
        <Mhs />
    </div>
}

export default App;