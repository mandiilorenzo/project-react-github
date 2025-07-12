import { FaGithub, FaPlus } from 'react-icons/fa'
import * as S from './style'

export const Home = () => {
    return (
        <main>
            <S.Container>
                <h1><FaGithub size={25} /> Meus repositórios</h1>

                <S.Form>
                    <input type="text" placeholder="Adicionar Repositórios" />
                    <S.Button type="submit"><FaPlus color='#fff' size={14} /></S.Button>
                </S.Form>
            </S.Container>
        </main>
    )
}