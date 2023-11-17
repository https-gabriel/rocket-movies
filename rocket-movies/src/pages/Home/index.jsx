import { Container } from './styles';

import { FiPlus } from 'react-icons/fi'


import {Header} from '../../components/Header'
import {Button} from '../../components/Button'

export function Home() {
    return(
        <Container>
            <Header/>
            
            <main>
                <div>
                    <h1>Meus filmes</h1>
                    <Button 
                    title="Adicionar filme"
                    icon={FiPlus}
                    />

                </div>
            </main>
        </Container>
    )
}