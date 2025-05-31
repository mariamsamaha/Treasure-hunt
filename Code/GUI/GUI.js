    import React, { useState, useEffect } from 'react';
    import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

    const TreasureHuntVisualization = () => {
    const [gridState, setGridState] = useState({
        gridSize: [5, 5],
        treasureLocation: [4, 4],
        obstacles: new Set(['2,2', '1,3', '3,1']),
        currentPos: [0, 0],
        qValues: new Map(),
    });

    // Simulated Q-values (in real implementation, these would come from the Python code)
    useEffect(() => {
        const simulatedQValues = new Map();
        for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (!gridState.obstacles.has(${i},${j})) {
            const actions = {
                'UP': Math.random() * 10,
                'DOWN': Math.random() * 10,
                'LEFT': Math.random() * 10,
                'RIGHT': Math.random() * 10
            };
            simulatedQValues.set(${i},${j}, actions);
            }
        }
        }
        setGridState(prev => ({ ...prev, qValues: simulatedQValues }));
    }, []);

    const getBestAction = (pos) => {
        const values = gridState.qValues.get(${pos[0]},${pos[1]});
        if (!values) return null;
        return Object.entries(values).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    };

    const renderCell = (i, j) => {
        const isTreasure = i === gridState.treasureLocation[0] && j === gridState.treasureLocation[1];
        const isObstacle = gridState.obstacles.has(${i},${j});
        const isCurrent = i === gridState.currentPos[0] && j === gridState.currentPos[1];
        const bestAction = getBestAction([i, j]);

        let cellStyle = "w-16 h-16 border border-gray-300 flex items-center justify-center relative";
        if (isObstacle) {
        cellStyle += " bg-gray-700";
        } else if (isTreasure) {
        cellStyle += " bg-yellow-200";
        } else if (isCurrent) {
        cellStyle += " bg-blue-200";
        }

        return (
        <div key={${i}-${j}} className={cellStyle}>
            {!isObstacle && !isTreasure && bestAction && (
            <div className="absolute inset-0 flex items-center justify-center">
                {bestAction === 'UP' && <ArrowUp className="text-blue-500" />}
                {bestAction === 'DOWN' && <ArrowDown className="text-blue-500" />}
                {bestAction === 'LEFT' && <ArrowLeft className="text-blue-500" />}
                {bestAction === 'RIGHT' && <ArrowRight className="text-blue-500" />}
            </div>
            )}
            {isTreasure && <span className="text-2xl">💎</span>}
            {isObstacle && <span className="text-2xl">🚫</span>}
        </div>
        );
    };

    const renderGrid = () => {
        const grid = [];
        for (let i = 0; i < gridState.gridSize[0]; i++) {
        const row = [];
        for (let j = 0; j < gridState.gridSize[1]; j++) {
            row.push(renderCell(i, j));
        }
        grid.push(
            <div key={i} className="flex">
            {row}
            </div>
        );
        }
        return grid;
    };

    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Q-Learning Treasure Hunt</h2>
        <div className="mb-4">
            <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center"><span className="text-2xl mr-2">💎</span> Treasure</span>
            <span className="flex items-center"><span className="text-2xl mr-2">🚫</span> Obstacle</span>
            <span className="flex items-center"><div className="w-4 h-4 bg-blue-200 mr-2"></div> Current Position</span>
            </div>
            <p className="text-sm text-gray-600">Arrows show the best learned action for each cell based on Q-values</p>
        </div>
        <div className="border border-gray-300 inline-block">
            {renderGrid()}
        </div>
        </div>
    );
    };

    export default TreasureHuntVisualization;