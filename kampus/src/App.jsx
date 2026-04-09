function Judul({ nama }){
    return <h1>Berita {nama}</h1>
}

function Isi(){
    return <span>Berita paling nyoss minggu ini</span>
}

function Artikel({ nama }){
    return <div>
        <Judul nama={nama}/>
        <Isi />
    </div>
}

// function utama di file ini
function App(){
    return <div>
        <Artikel nama="Pertama"/>
        <Artikel nama="Kedua"/>
        <Artikel nama="Ketiga"/>
    </div>
}

export default App;