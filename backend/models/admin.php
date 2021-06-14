<?php
    class Admin
    {
           private $conn;
           private $table="admin";

    
           private $id;
            private $name;
            private $mail;
            private $password;
           

            public function __construct($db)
            {
                    $this->conn = $db;
            }
            public function read()
            {
                  $query ="SELECT * FROM $this->table";

                  $stmt = $this->conn->prepare($query);

			// Execute query
			$stmt->execute();

			return $stmt; 
            }

    }

          
?>