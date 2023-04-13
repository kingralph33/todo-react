import AddButton from './Buttons/AddButton';

export default function AddNewTask() {
	return (
		<div className='flex mb-6 px-8 items-center'>
			<div className='w-11/12'>
				<label className='flex'>
					<span className='flex-none w-36 font-bold text-xl lg:text-2xl mr-2 text-emerald-400'>
						Enter Task:
					</span>
					<input
						type='text'
						id='taskInput'
						name='taskInput'
						minLength={1}
						className='flex-initial w-full h-12 p-2'
					/>
				</label>
			</div>
			<div className='w-1/12'>
				<AddButton />
			</div>
		</div>
	);
}
