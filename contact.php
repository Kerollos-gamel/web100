<?php
// Simulated data for demonstration
$photos = [
    ['url' => 'exercise1.jpg', 'alt' => 'Exercise 1'],
    ['url' => 'exercise2.jpg', 'alt' => 'Exercise 2'],
    // Add more photos here
];

header('Content-Type: application/json');
echo json_encode($photos);
?>
