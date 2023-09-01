import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculator from './main/Calculator'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
)
