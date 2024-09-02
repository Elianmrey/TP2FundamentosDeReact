import Card from './cardComponent.jsx';

export default function renderLoop() {
    const render = [];

    for (let count = 1; count <=4; count++)
    {
        render.push(<Card key= {count}/>)
    }

    return (render);
} 
  
