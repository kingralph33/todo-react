import { useState } from 'react';
export default function AddNewTask() {

    const [addTask, setAddTask] = useState<string>('');

    const createNewTask = (e: any) => {
        e.preventDefault();
        console.log(addTask);
    }
	return (
		<div className='mb-6 px-8'>
			<form className='flex w-full items-center' onSubmit={ createNewTask } >
				<label htmlFor='taskInput' className='flex'>
					<span className='flex-none w-32 font-bold text-xl lg:text-2xl text-emerald-400'>
						Enter Task:
					</span>
				</label>
				<input
					type='text'
					id='taskInput'
					name='taskInput'
					minLength={1}
					className='flex-initial w-full h-12 mx-2 p-2'
                    onChange={(e) => setAddTask(e.target.value)}
				/>
				<input
					type='submit'
					value='ADD'
					className='flex rounded-full bg-emerald-400 font-bold text-lg px-4 lg:px-8'
				/>
			</form>
		</div>
	);
}
