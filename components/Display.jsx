import React from 'react'

function Display({queue , onUpdateStatus, onRemove}){





  return (
  <div className="queue-display">
    <h2>Current Queue</h2>

    {queue.length === 0 ? (
      <p className="empty-queue">No customer data</p>
    ) : (
      <div className="queue-list">
        {queue.map((customer) => (
          <div className="queue-item" key={customer.id}>
            <div className="customer-info">
              <h3>{customer.name}</h3>
              <p>{customer.service}</p>
             
            </div>
            </div>
        ))}
      </div>
    )}
  </div>
)

}


export default Display