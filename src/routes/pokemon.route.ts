import { Router } from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import {
    getPokemon,
    getPokemonDetail,
    getPokemonOfTheDay,
} from '../controllers/pokemon.controller.ts';

/**
 * Router for the routes starting with `api/pokemon/`
 */
const router = new Router({
    prefix: '/pokemon',
});

router.get('/', getPokemon);
router.get('/potd', getPokemonOfTheDay);
router.get('/:id', getPokemonDetail);

export default router;
