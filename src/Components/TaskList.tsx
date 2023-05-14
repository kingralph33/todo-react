export default function TaskList() {
	return (
		<div
			className='border-4
border-emerald-600 text-emerald-400 font-bold text-lg p-8'
		>
			<ul>
				<li className='flex items-center border-b-2 border-emerald-600 mb-4'>
					<label className='flex w-full mb-2'>
						<p className='flex w-10/12'>Another task</p>
						<input
							type='checkbox'
							name='taskCompletedBox'
							id='taskCompletedBox'
							className='flex w-5 mr-4 checked:accent-emerald-400'
						/>
						<input
							type='submit'
							value='Delete'
							className=' flex w-fit justify-self-end rounded-full bg-red-800 font-bold text-white text-md px-4 lg:px-8'
						/>
					</label>
				</li>
			</ul>
		</div>
	);
}
