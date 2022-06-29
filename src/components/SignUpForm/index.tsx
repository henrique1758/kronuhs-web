import { XCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { useAuth, useSignInFormModal, useSignUpFormModal } from '../../hooks';
import { Button } from '../Button';
import { GithubButton } from '../GithubButton';
import { Input } from "../Input";
import styles from "./styles.module.scss";

export function SignUpForm() {
    const { isSignUpFormModalOpen, onCloseSignUpFormModal, } = useSignUpFormModal();
    const { openSignInFormModal } = useSignInFormModal();

    const { createAccount } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function showSignInFormModal() {
        onCloseSignUpFormModal();
        openSignInFormModal();
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        await createAccount({
            name,
            email,
            password
        });

        setName("");
        setEmail("");
        setPassword("");

        showSignInFormModal();
    }

    return (
        <Modal 
            isOpen={isSignUpFormModalOpen}
            onRequestClose={onCloseSignUpFormModal}
            ariaHideApp={false}
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
        >
            <button 
                className={styles.closeButton}
                onClick={onCloseSignUpFormModal}
            >
                <XCircle />
            </button>

            <h1>Inscreva-se <span>Agora!</span></h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Nome</label>
                    <Input 
                        type="text" 
                        placeholder="Seu nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="name">E-mail</label>
                    <Input 
                        type="email" 
                        placeholder="Seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="name">Senha</label>
                    <Input 
                        type="password" 
                        placeholder="Sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button type="submit" bgColor="green" title="Inscrever-se" />
            </form>

            <div className={styles.or}>OU</div>

            <GithubButton title="Criar conta com github" />

            <div className={styles.verifyContainer}>
                Já possui uma conta? 
                <button 
                    onClick={showSignInFormModal}
                    className={styles.sign}
                >Faça login</button>
            </div>
        </Modal>
    );
}