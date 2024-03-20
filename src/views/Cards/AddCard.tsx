import React from 'react';
import { Form } from '../../components/DeckCreate/Form';

export function AddCard() {
    return (
        <section id="content" className="h-[90vh] p-3 flex justify-center items-center">
            <Form handleSubmit={async (e) => {}} mode="card" />
        </section>
    )
}