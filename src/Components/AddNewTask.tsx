import AddButton from './Buttons/AddButton';

export default function AddNewTask() {
	return (
		<div className='flex mb-6 items-center'>
			<div className='flex-auto'>
				<label className='flex w-full'>
					<span className='flex-none font-bold text-xl lg:text-2xl mr-2 text-emerald-400'>
						Enter Task:
					</span>
					<input
						type='text'
						id='taskInput'
						name='taskInput'
						minLength={1}
						className='flex-1 h-12 p-2'
					/>
				</label>
			</div>
			<div className='ml-2'>
				<AddButton />
			</div>
		</div>
	);
}
