import { useEffect, useState } from 'react';
import './Chart.css';
import {TextField, Button} from '@mui/material';

const Chart = () => {
    const [list, setList] = useState([]);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        let lista = []
        for (let i = 0; i < 15; i++) {
            lista.push(Math.floor(Math.random() * 100))
        }
        setList(lista)
    }, [])

    const Random = () => {
        let lista = []
        let elementsNumber = document.getElementById('elementsNumberInput').value
        for (let i = 0; i < elementsNumber; i++) {
            lista.push(Math.floor(Math.random() * 100))
        }
        setList(lista)
    }

    async function Sort(){
        document.getElementById('sortClick').disabled = true
        let listElement = list.length
        let tempList = [...list]

        for (let i = 0; i < listElement-1; i++) {
            for (let j = 0; j < listElement-1; j++) {
                if(tempList[j] > tempList[j+1]) {
                    let temp = tempList[j]
                    tempList[j] = tempList[j+1]
                    tempList[j+1] = temp
                    await new Promise(r => setTimeout(r, speed));
                    setList([...tempList])
                    console.log(tempList)
                }
            }
        }
        document.getElementById('sortClick').disabled = false
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
        }}>
            <div style={{ display: 'flex', gap: "15px", alignItems: "center"}}>
                <TextField id="elementsNumberInput" label="Podaj liczbę elementów" variant="filled" type="number"/>
                <Button variant="contained" size="large" onClick={Random}>Losuj</Button>
                <TextField id="speedInput" label="Podaj prędkość (ms)" variant="filled" type="number"/>
                <Button variant="contained" size="large" onClick={() => setSpeed(document.getElementById('speedInput').value)}>Zmień prędkość</Button>
            </div>
            <div className="Chart">
                {
                    list.map((item) => {
                        return <div className='Chart_item' style={{ height: `${item}%`}}></div>
                    })
                }
            </div>
            <Button id="sortClick" variant="contained" size="large" onClick={Sort}>Układaj</Button>
        </div>
    );
}

export default Chart;