<?php /* abre o ficheiro e coloca-o no fluxo */
if(!file_exists("contagem.txt")){    
	print("Impossível abrir contagem\n");
}else{
	if(isset($_GET['op'])){
		$aux=$_GET['op'];
		$texto=file("contagem.txt");
		$linha=$texto[intval($aux)];
		$texto[$aux]=intval($linha)+1;

		for($i=0; $i<count($texto); $i++){
				print("$texto[$i] <br/>");
		}	
		
	}
	if($texto=file("contagem.txt")){
			for($i=0; $i<count($texto); $i++){
				print("$texto[$i] <br/>");
			}
	}
}
?>
