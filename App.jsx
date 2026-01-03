import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm'
import Display from './components/Display'





function App() {

const [queue, setQueue] = useState([ ])

const addToQueue = (customer) =>{
  setQueue([...queue, {...customer, id: Date.now(), status: 'waiting'}])
}

const updateStatus = (id, newStatus) =>{
  setQueue(queue.map(customer => {
    customer.id === id ? {...customer, status: newStatus}: customer
  }))
}

const removeFromQueue = (id) =>{
  setQueue(queue.filter(customer => customer.id !== id))
}

  return (
    <div className='App'>
    
      <main>
      <QueueForm 
        onAdd={addToQueue}/>
      <Display 
        queue={queue}
        onUpdateStatus={updateStatus}
        onRemove={removeFromQueue}/>
      </main>
    </div>
  )
}

export default App
