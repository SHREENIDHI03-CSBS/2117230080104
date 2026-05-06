STAGE 1 :

Notification Priority System Design

Approach :

The system receives notifications continuously from the API.

Each notification has:

- ID
- Type
- Message
- Timestamp

The notification priority is based on:

1. Type Weight
2. Recency

Priority order:

Placement > Result > Event

Weights used:

- Placement = 3
- Result = 2
- Event = 1

Priority Calculation :

Priority Score Formula:

Priority Score = Type Weight + Recency Score

Where:

- Higher type weight means higher importance.
- Latest notifications get higher recency score.

Example:

Placement notification = high priority  
Result notification = medium priority  
Event notification = low priority



Maintaining Top 10 Efficiently

To maintain the top 10 efficiently when new notifications arrive:

Min Heap Approach

Use a Min Heap of size 10.

Process:

1. Insert notification into heap.
2. Compare priority score.
3. If heap size exceeds 10:
   - Remove lowest priority notification.

Time Complexity:

- Insert: O(log n)
- Remove: O(log n)

This is efficient because:

- We only store 10 notifications.
- No need to sort all notifications every time.


Sorting Logic

1. Compare type priority
2. If same type:
   - Compare timestamp
3. Latest notification gets higher priority



Implementation Details

Language used:

JavaScript (React)

Functions:

- fetchNotifications()
- getTopNotifications()

Files:

- notificationService.js
- priority.js
- Notifications.jsx



Advantages

- Fast
- Scalable
- Efficient memory usage
- Real-time updates supported


Future Improvements

- WebSocket for live notifications
- Better priority algorithm
- User-customized priorities

 

The system efficiently maintains the top 10 notifications using priority-based sorting and Min Heap logic.