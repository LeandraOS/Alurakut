import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response ){
    if(request.method === 'POST'){

        const TOKEN = '4476c21091b8e24e87e72b0b078c32';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "975768", // ID de Model de "comunidades" criado pelo Dato
            ...request.body,
            //title: "Comunidade de teste",
            //imageUrl: 'https://github.com/leandraos.png',
            //creatorSlug: "leandraos"
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }
        response.status(404).json({
            message: 'Ainda não temos nada no GET, mas no POST tem!'
        })
    }
