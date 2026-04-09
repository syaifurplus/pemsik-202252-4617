import Mhs from "./Mhs.jsx";

function App(){
    const list_mhs = [
        {
            nama: "syaifur rohman",
            nim: "A11.213213"
        },{
            nama: "rohmat wingcun",
            nim: "A12.432423"
        }
    ]

    return <div>
        <Mhs mhs={list_mhs[0]}/>
        <Mhs mhs={list_mhs[1]}/>
    </div>
}

export default App;