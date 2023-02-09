import { useEffect, useState } from 'react';
import {TextField, Button, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import './Chart.css';

const Chart = () => {
    const [list, setList] = useState([]);
    const [speed, setSpeed] = useState(100);
    const [algorithm, setAlgorithm] = useState("bubble");

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

        if(algorithm === "bubble") {
            for (let i = 0; i < listElement-1; i++) {
                for (let j = 0; j < listElement-1; j++) {
                    if(tempList[j] > tempList[j+1]) {
                        let temp = tempList[j]
                        tempList[j] = tempList[j+1]
                        tempList[j+1] = temp
                        await new Promise(r => setTimeout(r, speed));
                        setList([...tempList])
                    }
                }
            }
        }
        else if(algorithm === "bySelection") {
            for(let i = 0; i < listElement - 1; i++){
                let min = tempList[i]
                let minIdx = i
                for(let j = i; j < listElement ; j++){
                    if(tempList[j] < min){
                        min = tempList[j]
                        minIdx = j
                    }
                }
                let temp = tempList[i]
                tempList[i] = min
                tempList[minIdx] = temp
                await new Promise(r => setTimeout(r, speed));
                setList([...tempList])
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
                    list.map((item, index) => {
                        return <div key={index} className='Chart_item' style={{ height: `${item}%`}}></div>
                    })
                }
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px"
            }}>
                <FormControl sx={{minWidth: 250}}>
                    <InputLabel id="wyborAlgorytmuLabel">Wybór algorytmu</InputLabel>
                    <Select
                        labelId="wyborAlgorytmuLabel"
                        label="Wybór algorytmu"
                        id="wyborAlgorytmu"
                        onChange={(e) => setAlgorithm(e.target.value)}
                        defaultValue={"bubble"}
                    >
                        <MenuItem value={"bubble"}>Bąbelkowe</MenuItem>
                        <MenuItem value={"bySelection"}>Przez wybór</MenuItem>
                    </Select>
                </FormControl>
                <Button id="sortClick" variant="contained" size="large" onClick={Sort}>Układaj</Button>
            </div>
        </div>
    );
}

export default Chart;