import React from 'react'

export default function RepositoryItem({repository}) {
    return (
        <div>
            <li>
                <strong>{repository.name ?? ''}</strong>
                <p>{repository.description}</p>

                <a href={repository.html_url}>
                    Acessar repositório
                </a>
            </li>
        </div>
    )
}
