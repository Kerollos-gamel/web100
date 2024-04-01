<?php
// Simulated data for demonstration
$nutrition = [
    ['text' => 'Eat plenty of fruits and vegetables for a balanced diet.'],
    ['text' => 'Stay hydrated throughout the day.'],
    // Add more nutritional advice here
];

header('Content-Type: application/json');
echo json_encode($nutrition);
?>
