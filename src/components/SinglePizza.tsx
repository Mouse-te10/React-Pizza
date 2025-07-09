import React, { FC, useState } from "react"
import Pizza from "../models/Pizza"
import EditPizzaForm from "./EditPizzaForm"

interface SinglePizzaProps {
    pizza: Pizza
    updatePizza: (newPizza: Pizza) => void
    deletePizza: (id: number) => void
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(prev => !prev)
    }

    const handleDelete = () => {
        deletePizza(pizza.id)
    }

    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

            <div className="pizza-controls">
                <img src="/images/editIcon.png" alt="edit" onClick={handleToggleEdit}/>
                <img src="/images/deleteIcon.png" alt="Delete" onClick={handleDelete}/>
            </div>

            {edit && <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/>}

        </div>
    )
}

export default SinglePizza