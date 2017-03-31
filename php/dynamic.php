<!DOCTYPE html>
<html lang="fr-FR">
    <head>
    </head>
    <body>
        <?php
//            echo "starting file upload...";
        
            $vars = serialize($_POST);
        
            $file_path = "../".$vars["filepath"];
            $file_content = $var["filecontent"];

            $fh = fopen($file_path, 'w+') or die("could not open file");
            fwrite($fh, $file_content."\n");
            fclose($fh);
            
//            echo "...ended"
        ?>
    </body>
</html>