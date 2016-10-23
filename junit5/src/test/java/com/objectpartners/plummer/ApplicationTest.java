package com.objectpartners.plummer;

import com.objectpartners.plummer.junit5.Application;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest(classes = Application.class)
@ExtendWith(SpringExtension.class)
@ExtendWith(DependencyTrackerResolver.class)
abstract class ApplicationTest {
}
