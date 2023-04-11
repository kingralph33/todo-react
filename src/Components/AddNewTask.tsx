import AddButton from './Buttons/AddButton';

export default function AddNewTask() {
	return (
		<div className='flex justify-center mb-6'>
			<label>
				<span className='font-bold text-2xl text-emerald-400'>
					Enter Task:
				</span>
				<input
					type='text'
					id='taskInput'
					name='taskInput'
					minLength={1}
					size={50}
					className='mx-2 h-12 p-2'
				/>
			</label>
			<AddButton />
		</div>
	);
}
