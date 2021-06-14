<?php
    $num = $result->rowCount();


    if ($num>0) 
    {
        $posts_arr = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
      
            $post_item = array(
              'id' => $id,
              'name' => $name,
              'mail' =>$mail,
              'date_of_birth' => $date_of_birth,
              'faculty' => $faculty,
              'year' => $year,
            );
    }
    array_push($posts_arr, $post_item);
    echo json_encode($posts_arr);
}
else {
    // No Posts
    echo json_encode(
      array('message' => 'No student found')
    );
}

?>