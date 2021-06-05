import { error } from '@pnotify/core';

export default function errorNotFound() {
    error({
        text: 'Sorry, no results. Try something else.',
        delay: 3000,
    });
}