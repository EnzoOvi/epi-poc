import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
import elements from "./element"
import blocks from "./block"
import Node from './node'
import DefaultGridComponent from './grid/default-grid'
import DefaultColumn from './column/default-column'
import CardColumn from './column/card-column'
import CardRow from './row/card-row'
import DefaultRow from './row/default-row'
import CarouselRow from './row/carousel-row'
import { prefixDictionaryEntries } from "@/components/utils"

prefixDictionaryEntries(elements, "Element")

export const ComponentModuleList : ComponentTypeDictionary = [
    ...elements,
    ...blocks,
    {
        type: "Node",
        component: Node
    },
    {
        type: "Section/BlankSection",
        component: DefaultGridComponent
    },
    {
        type: "Row/DefaultRow",
        component: DefaultRow
    },
    {
        type: "Row/CardRow",
        component: CardRow
    },
    {
        type: "Row/CarouselRow",
        component: CarouselRow
    },
    {
        type: "Column/DefaultColumn",
        component: DefaultColumn
    },
    {
        type: "Column/CardColumn",
        component: CardColumn
    }
]

export default ComponentModuleList