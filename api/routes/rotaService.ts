import { Cliente } from '../models/Cliente';

interface Coordenada {
    x: number;
    y: number;
}

const calcularDistancia = (p1: Coordenada, p2: Coordenada): number => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

const encontrarMaisProximo = (atual: Coordenada, pontos: Coordenada[]): Coordenada => {
    let distanciaMinima = Infinity;
    let pontoMaisProximo: Coordenada = { x: 0, y: 0 };

    pontos.forEach(p => {
        const distancia = calcularDistancia(atual, p);
        if (distancia < distanciaMinima) {
            distanciaMinima = distancia;
            pontoMaisProximo = p;
        }
    });

    return pontoMaisProximo;
};

const calcularRota = (clientes: Cliente[]): Cliente[] => {
    let pontos: Coordenada[] = clientes.map(c => ({ x: c.coordenada_x, y: c.coordenada_y }));
    let rota: Cliente[] = [];
    let pontoAtual: Coordenada = { x: 0, y: 0 }; // Ponto de partida, pode ser ajustado

    while (pontos.length > 0) {
        let maisProximo = encontrarMaisProximo(pontoAtual, pontos);
        pontoAtual = maisProximo;
        pontos = pontos.filter(p => p !== maisProximo);
        let clienteCorrespondente = clientes.find(c => c.coordenada_x === maisProximo.x && c.coordenada_y === maisProximo.y);
        if (clienteCorrespondente) {
            rota.push(clienteCorrespondente);
        }
    }

    return rota;
};

export default calcularRota;