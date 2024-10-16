interface TemaCoresProps {
    background: string;
    color: string;
}

const Cores = {
    branco: '#fff',
    preto: '#242424',
    cinza: '#dadada'
}

const temaClaro: TemaCoresProps = {
    background: Cores.branco,
    color: Cores.preto
}

const temaEscuro: TemaCoresProps = {
    background: Cores.preto,
    color: Cores.branco
}

export { Cores, temaClaro, temaEscuro }