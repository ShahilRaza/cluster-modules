Node.js Cluster Module Notes for Interviews
Overview
The Node.js cluster module enables the creation of multiple child processes (workers) to run concurrently, leveraging multi-core CPUs to improve performance for CPU-intensive or I/O-bound tasks. Each worker runs in its own process, sharing the same server port, which is useful for scaling Node.js applications.
Key Concepts

Cluster Module: Built-in Node.js module (node:cluster) that allows a single process (primary) to fork multiple worker processes.
Primary Process: The main process that manages worker processes, identified by cluster.isPrimary.
Worker Process: Child processes forked from the primary process, each running an independent instance of the application.
Use Case: Ideal for utilizing multi-core systems, as Node.js is single-threaded by default.
Load Balancing: The cluster module automatically distributes incoming connections across workers (round-robin scheduling on most platforms).

Interview Talking Points

Why Use Cluster?: To utilize multiple CPU cores, improving performance for high-traffic or CPU-heavy applications.
How It Works: The primary process forks workers; each worker runs a separate instance of the app, sharing the same server port.
Benefits:
Better CPU utilization.
Improved scalability for HTTP servers.
Automatic load balancing across workers.


Limitations:
Workers don’t share memory (use IPC for communication).
Not suitable for stateful applications without additional handling (e.g., shared sessions).


PM2 Integration: PM2 can manage clustering (-i <instances>), but the code’s internal clustering may conflict unless configured properly.

Common Questions

How does the Cluster module distribute requests?
Uses round-robin scheduling (OS-dependent) to distribute incoming connections to workers.


Can workers share state?
No, workers are separate processes. Use a database or message passing for shared state.


How to scale further?
Increase the number of workers (e.g., cluster.fork() based on os.cpus().length).
Use tools like PM2 for process management and monitoring.


When to avoid clustering?
For single-threaded, low-traffic apps or when state management is complex.



