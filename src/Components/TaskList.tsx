import DeleteButton from './Buttons/DeleteButton';

export default function TaskList() {
	return (
		<div className='border-4 border-emerald-600 text-white p-8'>
			<ul>
				<li className='grid gap-x-2 grid-cols-2 items-center border-b-2 border-emerald-600 mb-4'>
					<p>This is a task</p>
					<div className='w-fit justify-self-end mb-2'>
						<DeleteButton />
					</div>
				</li>
				<li className='flex items-center border-b-2 border-emerald-600 mb-4'>
					<label className='flex'>
						<p>Another task</p>
						<input
							type='checkbox'
							name='taskCompletedBox'
							id='taskCompletedBox'
						/>
					</label>
					<input
						type='submit'
						value='Delete'
						className=' flex w-fit justify-self-end mb-2 rounded-full bg-red-800 font-bold text-md px-4 lg:px-8'
					/>
				</li>
			</ul>
		</div>
	);
}
