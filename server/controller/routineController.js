module.exports = {
    // ( GET REQUEST )        
    getUserRoutineWorkouts: (req, res, next) => {
        const { user_routine_id, user_workout_id } = req.params;
        const db = req.app.get('db');
       // console.log('Hit user_regimens endpoint.');
        db.get_user_routine_workout(user_routine_id, user_workout_id).then(workout => {
            res.status(200).send(workout);
        });
    },
    // ( GET REQUEST )
    getUserRoutines: (req, res, next) => {
        const { user_id } = req.params;
        const db = req.app.get('db');
        // console.log('Hit user_workout endpoint.');
        db.get_user_routine(user_id).then(routine => {
            res.status(200).send(routine);
        })
    },
    // ( POST REQUEST )
    postDefaultRoutine: (req, res, next) => {
        const {
            day,
            routine_name,
            muscle_groups,
            how_to } = req.body;
            const db = req.app.get('db');
            db.create_default_routine(
                day, 
                routine_name,
                muscle_groups,
                how_to )
                .then( routine => {
                    res.status(200).send(routine)
                })
    },
    // ( POST REQUEST )
    postUserRoutine: (req, res, next) => {
        const {
            day,
            routine_name,
            muscle_groups,
            how_to,
            user_id } = req.body;
            const db = req.app.get('db');
           // console.log('Hit user_regimen endpoint.');
            db.create_user_routine(
                day, 
                routine_name,
                muscle_groups,
                how_to,
                user_id )
                .then( routine => {
            res.status(200).send(routine);
        })
    },
    // ( DELETE REQUEST )
    removeUserRoutine: (req, res, next) => {
        const { user_routine_id } = req.params;
        const db = req.app.get('db');
       // console.log('Hit remove_user_regimen endpoint.');
        db.delete_user_routine(user_routine_id).then(routine => {
            res.status(200).send(routine);
        })
    },
    // ( DELETE REQUEST )
    removeDefaultRoutine: (req, res, next) => {
        const { default_routine_id } = req.params;
        const db = req.app.get('db');
        db.delete_default_routine(default_routine_id).then(routine => {
            res.status(200).send(routine);
        })
    }
}