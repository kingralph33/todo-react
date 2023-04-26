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
				<li className='grid gap-x-2 grid-cols-2 items-center border-b-2 border-emerald-600 mb-4'>
					<p>Another task</p>
					<div className='w-fit justify-self-end mb-2'>
						<DeleteButton />
					</div>
				</li>
			</ul>
		</div>
	);
}
