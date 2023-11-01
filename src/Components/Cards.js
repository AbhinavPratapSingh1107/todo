import Card from 'react-bootstrap/Card';
import EditCard from './EditCard';

export default function Cards({data,setData}){

    return(
        data.map(goal =>
            <Card 
                key={goal.key}
                bg='dark'
                text='white'
                style={{margin:'2px auto' }}
            >
             <Card.Body>
               <Card.Title>{goal.title}</Card.Title>
                   <Card.Text>
                      {goal.body}
                   </Card.Text>
                   <EditCard data={data} setData={setData} goal={goal}/>
             </Card.Body>
            </Card>
            )
    );
}