import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todoApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const queryClient = useQueryClient()

    const {
        isLoading, 
        isError,
        error,
        data:todos
    } = useQuery('todos', getTodos)

    const addTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            //Invalidates cache and refetch
            queryClient.invalidateQueries("todos")
        }
    })

    const updateTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            //Invalidates cache and refetch
            queryClient.invalidateQueries("todos")
        }
    })

    const deleteTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            //Invalidates cache and refetch
            queryClient.invalidateQueries("todos")
        }
    })

    return(
       <>
       todo list
       </>
    )

}

export default TodoList