import { supabase } from '../lib/supbaseClient';

const form = document.querySelector('#add-note-form');
form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const titleInput = document.querySelector('#title') as HTMLInputElement;
    const contentInput = document.querySelector('#content') as HTMLTextAreaElement;
    
    try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
            throw new Error('Not authenticated');
        }

        const { error } = await supabase.from('notes').insert({
            title: titleInput.value,
            content: contentInput.value,
            user_id: session.user.id
        });

        if (error) throw error;

        titleInput.value = '';
        contentInput.value = '';
        window.location.reload();
    } catch (error) {
        alert('Error adding note: ' + (error as Error).message);
    }
});