import React, { useState, useEffect} from 'react'
import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss'

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/lcpsd/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])


    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {
                    repositories.map(repository => 
                    <RepositoryItem repository={repository}/>
                    )
                }
            </ul>
        </section>
    )
}
