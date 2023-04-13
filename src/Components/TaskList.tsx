import DeleteButton from './Buttons/DeleteButton';

export default function TaskList() {
	return (
		<div className='border-4 border-emerald-600 text-white p-8'>
			<ul>
				<li className='flex items-center border-b-2 border-emerald-600 mb-4'>
					<p>This is a task</p>
					<div className='ml-2 mb-2'>
						<DeleteButton />
					</div>
				</li>
				<li className='flex items-center border-b-2 border-emerald-600 mb-4'>
					<p>Another task</p>
					<div className='ml-2 mb-2'>
						<DeleteButton />
					</div>
				</li>
			</ul>
		</div>
	);
}
