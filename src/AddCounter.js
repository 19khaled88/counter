import React from 'react';

const AddCounter = ({func}) => {
  return (
    <div className="pl-5 space-y-12 w-56">
        <button
                className="mr-5 bg-emerald-600 text-white px-3 py-2 rounded shadow"
                id="addCounter"
                onClick={func}
            >
                Add Counter
        </button>
        <button
                className="bg-amber-600 text-white px-3 py-2 rounded shadow"
                id="reset"
        >
                Reset
        </button>
    </div>
  );
}

export default AddCounter;
