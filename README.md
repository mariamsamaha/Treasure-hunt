# Treasure-hunt

This project implements a pathfinding and reinforcement learning agent for solving a **Treasure Hunt** game in a grid world. The goal is to navigate from a start position to the treasure while avoiding obstacles and minimizing path cost.

## 📁 Project Structure

- **Phase 1**: Focuses on classical AI search algorithms.
- **Phase 2**: Implements Q-learning with a GUI for interactive training and visualization.

---

## 📌 Phase 1: Search-Based AI

### 🔍 Problem Modeling

- **Environment**: Grid-based world (e.g., 32x32)
- **Initial State**: Typically (0, 0)
- **Goal State**: Treasure location (e.g., (31, 31))
- **Obstacles**: Specified coordinates, e.g., `[(1, 1), (4, 2), (3, 3)]`
- **Actions**: Up, Down, Left, Right
- **Cost**: Each move has a uniform cost of 1

### 🔄 Transition Model

| Action | Resulting State     |
|--------|---------------------|
| Up     | (x-1, y)            |
| Down   | (x+1, y)            |
| Left   | (x, y-1)            |
| Right  | (x, y+1)            |

### 🧠 Algorithms Used

#### **Uninformed Search**
- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- Uniform Cost Search (UCS)
- Iterative Deepening Search (IDS)

#### **Heuristic & Local Search**
- A* Search (with Manhattan/Euclidean heuristics)
- Greedy Best-First Search
- Hill Climbing
- Simulated Annealing
- Genetic Algorithm

### 📊 Comparison Summary

| Algorithm            | Time       | Space      | Complete | Optimal |
|----------------------|------------|------------|----------|---------|
| BFS                  | O(b^d)     | O(b^d)     | Yes      | Yes     |
| DFS                  | O(b^m)     | O(bm)      | No       | No      |
| UCS                  | O(b^(C*/ε))| O(b^d)     | Yes      | Yes     |
| IDS                  | O(b^d)     | O(bd)      | Yes      | Yes     |
| A*                   | O(b^m)     | O(b^m)     | Yes      | Yes (admissible `h`) |
| Greedy BFS           | O(b^d)     | O(b^d)     | No       | No      |
| Hill Climbing        | O(b×d)     | O(1)       | No       | No      |
| Genetic Algorithm    | O(g×n×m)   | O(n)       | Yes      | No      |
| Simulated Annealing  | O(b×d)     | O(1)       | Yes      | Yes (t → 0) |

---

## 📌 Phase 2: Q-Learning Agent with GUI

### 🧠 Reinforcement Learning Setup

- **States**: Grid coordinates (x, y)
- **Actions**: Up, Down, Left, Right

### 🎯 Reward Function

| State Type       | Reward     |
|------------------|------------|
| Goal State       | +10        |
| Obstacle         | −10        |
| Non-goal Step    | −1         |

### 🧩 Components

- `TreasureHunt`: Environment that defines grid behavior
- `QLearningAgent`: Learns an optimal policy using Q-learning
- `React GUI`: Displays training process and policy visualization

---

## 🚀 Getting Started

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run the GUI:
    ```bash
    npm start
    ```

3. Watch the agent learn and find the treasure!

---
