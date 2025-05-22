Node.js Cluster Module: Interview Notes
Overview

Node.js cluster module creates multiple workers to run concurrently, using multi-core CPUs to boost performance.
Workers share the same server port, ideal for scaling apps.

Key Concepts

Cluster Module: Built-in (node:cluster), forks workers from a primary process.
Primary Process: Manages workers, identified by cluster.isPrimary.
Worker Process: Independent app instances forked from the primary.
Use Case: Utilizes multi-core systems (Node.js is single-threaded by default).
Load Balancing: Distributes connections across workers (round-robin, OS-dependent).

Interview Talking Points

Why Use It?: Leverages multiple CPU cores for better performance in high-traffic or CPU-heavy apps.
How It Works: Primary forks workers; each runs the app, sharing the server port.
Benefits: Better CPU use, scalability for HTTP servers, automatic load balancing.
Limitations: No memory sharing (use IPC), not ideal for stateful apps (e.g., shared sessions).
PM2: Can manage clustering (-i <instances>), but may conflict with internal clustering.

Common Questions

How are requests distributed? Round-robin scheduling (OS-dependent).
Can workers share state? No, use a database or message passing.
How to scale? Add workers (e.g., cluster.fork() via os.cpus().length), use PM2.
When to avoid? Single-threaded, low-traffic apps or complex state management.

