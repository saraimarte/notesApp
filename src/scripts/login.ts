import { supabase } from '../lib/supbaseClient';

const form = document.querySelector('#login-form');
form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = document.querySelector('#email') as HTMLInputElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;

    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: emailInput.value,
            password: passwordInput.value,
        });

        if (error) throw error;
        window.location.href = '/notes';
    } catch (error) {
        alert('Error logging in: ' + (error as Error).message);
    }
});