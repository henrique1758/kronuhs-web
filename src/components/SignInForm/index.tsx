import { XCircle } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal'
import { useAuth, useSignInFormModal, useSignUpFormModal } from '../../hooks';
import { Button } from '../Button';
import { GithubButton } from '../GithubButton';
import { Input } from "../Input";
import styles from "./styles.module.scss";

export function SignInForm() {
    const { isSignInFormModalOpen, onCloseSignInFormModal } = useSignInFormModal();
    const { openSignUpFormModal } = useSignUpFormModal();
    const { signIn, githubAuth } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const authUrl = `https://github.com/login/oauth/authorize?client_id=8efb003d95e84bb5ebe6`

    useEffect(() => {
        const url = window.location.href;

        const hasGithubCode = url.includes("?code=");

        if (hasGithubCode) {
            const [urlWithoutCode, code] = url.split("?code=");

            githubAuth(code);

            window.history.pushState({}, '', urlWithoutCode);
        }
    }, [githubAuth])

    function showSignUpFormModal() {
        onCloseSignInFormModal();
        openSignUpFormModal();
    };

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (email === '') {
            setIsEmailEmpty(true);
            
            toast.error("O campo email é obrigatório", {
                position: 'top-left'
            });
        } else if (password === '') {
            setIsPasswordEmpty(true);

            toast.error("O campo password é obrigatório", {
                position: 'top-left'
            });
        } else {
            await signIn({
                email,
                password
            });
    
            setEmail("");
            setPassword("");
            onCloseSignInFormModal();
        }
    };

    return (
        <Modal
            isOpen={isSignInFormModalOpen}
            onRequestClose={onCloseSignInFormModal}
            ariaHideApp={false}
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
        >
            <button
                className={styles.closeButton}
                onClick={onCloseSignInFormModal}
            >
                <XCircle />
            </button>

            <h1>Faça <span>login</span> em sua conta!</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">E-mail</label>
                    <Input
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setIsEmailEmpty(false)}
                        isInputError={isEmailEmpty}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="name">Senha</label>
                    <Input
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => setIsPasswordEmpty(false)}
                        isInputError={isPasswordEmpty}
                    />
                </div>

                <Button type="submit" bgColor="green" title="Entrar" />
            </form>

            <div className={styles.or}>OU</div>

            <GithubButton title="Entrar com github" href={authUrl} />

            <div className={styles.verifyContainer}>
                Não possui uma conta?
                <button
                    onClick={showSignUpFormModal}
                    className={styles.sign}
                >
                    Criar conta
                </button>
            </div>
        </Modal>
    );
}