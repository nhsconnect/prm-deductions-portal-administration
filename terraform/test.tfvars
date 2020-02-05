environment          = "test"
component_name       = "generic-component"

task_execution_role  = "ecsTaskExecutionRole"
task_family          = "generic-component"

task_container_name  = "generic-component-container"
task_image_name      = "deductions/generic-component"
task_cpu             = 256
task_memory          = 512
task_container_port  = 3000
task_host_port       = 3000

service_container_port  = "3000"
service_container_name  = "generic-component-container"
service_desired_count   = "2"