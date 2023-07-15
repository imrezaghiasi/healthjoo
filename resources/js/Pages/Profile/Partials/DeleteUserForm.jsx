import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">حذف اکانت</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    پس از حذف حساب شما، تمام منابع و داده های آن برای همیشه حذف می شوند. قبل از حذف حساب خود، لطفاً هر گونه داده یا اطلاعاتی را که می خواهید حفظ کنید دانلود کنید.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>حذف حساب کاربری</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        آیا مطمئن هستید که می خواهید اکانت خود را حذف کنید؟
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        پس از حذف حساب شما، تمام منابع و داده های آن برای همیشه حذف می شوند. لطفاً رمز عبور خود را وارد کنید تا تأیید کنید که می خواهید حساب خود را برای همیشه حذف کنید.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="رمز عبور" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="رمز عبور"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>برگشت</SecondaryButton>

                        <DangerButton className="mr-3" disabled={processing}>
                            حذف حساب کاربری
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
