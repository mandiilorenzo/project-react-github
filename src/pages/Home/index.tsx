import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaGithub, FaPlus } from 'react-icons/fa'
import * as S from './style'
import { getRepositories } from '../../services/apis'

type FormData = {
    repository: string
}

type RepoData = {
    full_name: string;
    description: string;
    html_url: string;
};


export const Home = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [repoData, setRepoData] = useState<RepoData | null>(null);

    const onSubmit = async (data: FormData) => {
        try {
            const repositoryData = await getRepositories(data.repository);
            setRepoData(repositoryData);
        } catch (error) {
            console.error('Error fetching repository:', error);
            setRepoData(null);
        }
    };


    return (
        <main>
            <S.Container>
                <h1><FaGithub size={25} /> Meus repositórios</h1>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                        placeholder="Adicionar Repositórios"
                        {...register('repository', { required: true })}
                    />
                    <S.Button type="submit"><FaPlus color='#fff' size={14} /></S.Button>
                </S.Form>

                {repoData && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{repoData.full_name}</h3>
                        <p>{repoData.description}</p>
                        <a href={repoData.html_url} target="_blank" rel="noreferrer">Ver no GitHub</a>
                    </div>
                )}
            </S.Container>
        </main>
    )
}