import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import * as S from './style'
import { getRepositories } from '../../services/apis'

type FormData = {
    repository: string
}

type RepoData = {
    full_name: string;
    html_url: string;
};


export const Home = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [repoData, setRepoData] = useState<RepoData[]>([]);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            const repositoryData = await getRepositories(data.repository);

            const alreadyExists = repoData.some(repo => repo.full_name === repositoryData.full_name);
            if (!alreadyExists) {
                setRepoData(prev => [...prev, repositoryData]);
            }

        } catch (error) {
            console.error('Error fetching repository:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = (repoName: string) => {
        setRepoData(prev => prev.filter(repo => repo.full_name !== repoName));
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
                    <S.Button loading={loading} type="submit">
                        {loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="#fff" size={14} />}
                    </S.Button>
                </S.Form>

                <S.List>
                    {repoData.map(repo => (
                        <li key={repo.full_name}>
                            <S.DeleteButton onClick={() => handleDelete(repo.full_name)}> <FaTrash size={14}/></S.DeleteButton>
                            <h3>{repo.full_name}</h3>
                            <a href={repo.html_url} target="_blank" rel="noreferrer"><FaBars size={20} /></a>
                        </li>
                    ))}
                </S.List>
            </S.Container>
        </main>
    )
}